# 附录 B：Java 互操作性

> This appendix describes issues and techniques for interfacing between Kotlin and Java.

An essential Kotlin design goal is to create a seamless experience for Java programmers. If you want to slowly migrate to Kotlin, you can easily start by sprinkling bits of Kotlin into your existing Java project. This way you can write new Kotlin code atop your Java base, benefiting from Kotlin language features without being forced to rewrite Java code when it doesn’t make sense.

Not only is it easy to call Java code from Kotlin, it’s also straightforward to call Kotlin code within a Java program.

### Calling Java from Kotlin

To use a Java class from Kotlin, import it, create an instance, and call a function, just as you would in Java. Here, we use `java.util.Random()`:

```
// interoperability/Random.kt
import atomictest.eq
import java.util.Random

fun main() {
  val rand = Random(47)
  rand.nextInt(100) eq 58
}
```

As with creating any instance in Kotlin, you don’t need Java’s `new`. A class from a Java library works like a native Kotlin class.

JavaBean-style getters and setters in a Java class become properties in Kotlin:

```
// interoperability/Chameleon.java
package interoperability;
import java.io.Serializable;

public
class Chameleon implements Serializable {
  private int size;
  private String color;
  public int getSize() {
    return size;
  }
  public void setSize(int newSize) {
    size = newSize;
  }
  public String getColor() {
    return color;
  }
  public void setColor(String newColor) {
    color = newColor;
  }
}
```

When working with Java, the package name must be identical (including case) to the directory name. Java package names typically contain only lowercase letters. To conform to this convention, this appendix uses only lowercase letters in the `interoperability` example subdirectory name.

The imported `Chameleon` class works like a Kotlin class with properties:

```
// interoperability/UseBeanClass.kt
import interoperability.Chameleon
import atomictest.eq

fun main() {
  val chameleon = Chameleon()
  chameleon.size = 1
  chameleon.size eq 1
  chameleon.color = "green"
  chameleon.color eq "green"
  chameleon.color = "turquoise"
  chameleon.color eq "turquoise"
}
```

Extension functions are especially helpful when you use an existing Java library that lacks needed member functions. For example, we can add an `adjustToTemperature()` operation to `Chameleon`:

```
// interoperability/ExtensionsToJavaClass.kt
package interop
import interoperability.Chameleon
import atomictest.eq

fun Chameleon.adjustToTemperature(
  isHot: Boolean
) {
  color = if (isHot) "grey" else "black"
}

fun main() {
  val chameleon = Chameleon()
  chameleon.size = 2
  chameleon.size eq 2
  chameleon.adjustToTemperature(isHot = true)
  chameleon.color eq "grey"
}
```

The Kotlin standard library contains many extensions for classes from the Java standard library such as `List` and `String`.

### Calling Kotlin from Java

Kotlin produces libraries that are usable from Java. For the Java programmer, a Kotlin library looks like a Java library.

Because everything in Java is a class, let’s start with a Kotlin class containing a property and a function:

```
// interoperability/KotlinClass.kt
package interop

class Basic {
  var property1 = 1
  fun value() = property1 * 10
}
```

If you import this class into Java, it looks like an ordinary Java class:

```
// interoperability/UsingKotlinClass.java
package interoperability;
import interop.Basic;
import static atomictest.AtomicTestKt.eq;

public class UsingKotlinClass {
  public static void main(String[] args) {
    Basic b = new Basic();
    eq(b.getProperty1(), 1);
    b.setProperty1(12);
    eq(b.value(), 120);
  }
}
```

`property1` becomes a `private` field containing JavaBean-style getters and setters. The `value()` member function becomes a Java method with the same name.

We have also imported `AtomicTest`, which requires additional ceremony in Java: we must import it using the `static` keyword and give the package name. `eq()` can only be called as an ordinary function because Java doesn’t support infix notation.

If a Kotlin class is in the same package as Java code, you don’t need to import it:

```
// interoperability/KotlinDataClass.kt
package interoperability

data class Staff(
  var name: String,
  var role: String
)
```

`data` classes generate extra member functions like `equals()`, `hashCode()` and `toString()`, all of which work seamlessly within Java. At the end of `main()`, we verify the implementations of `equals()` and `hashCode()` by placing a `Data` object into a `HashMap`, then retrieving it:

```
// interoperability/UseDataClass.java
package interoperability;
import java.util.HashMap;
import static atomictest.AtomicTestKt.eq;

public class UseDataClass {
  public static void main(String[] args) {
    Staff e = new Staff(
      "Fluffy", "Office Manager");
    eq(e.getRole(), "Office Manager");
    e.setName("Uranus");
    e.setRole("Assistant");
    eq(e,
      "Staff(name=Uranus, role=Assistant)");

    // Call copy() from the data class:
    Staff cf = e.copy("Cornfed", "Sidekick");
    eq(cf,
      "Staff(name=Cornfed, role=Sidekick)");

    HashMap<Staff, String> hm =
      new HashMap<>();
    // Employees work as hash keys:
    hm.put(e, "Cheerful");
    eq(hm.get(e), "Cheerful");
  }
}
```

If you use the command line to run Java code that incorporates Kotlin code, you must include `kotlin-runtime.jar` as a dependency, otherwise you’ll get runtime exceptions complaining that some of the library utility classes are not found. IntelliJ IDEA automatically includes `kotlin-runtime.jar`.

Kotlin top-level functions map to `static` methods in a Java class that takes its name from the Kotlin file:

```
// interoperability/TopLevelFunction.kt
package interop

fun hi() = "Hello!"
```

To import, specify the class name generated by Kotlin. This name must also be used when calling the `static` method:

```
// interoperability/CallTopLevelFunction.java
package interoperability;
import interop.TopLevelFunctionKt;
import static atomictest.AtomicTestKt.eq;

public class CallTopLevelFunction {
  public static void main(String[] args) {
    eq(TopLevelFunctionKt.hi(), "Hello!");
  }
}
```

If you don’t want to qualify `hi()` with the package name, use `import static` as we do with `AtomicTest`:

```
// interoperability/CallTopLevelFunction2.java
package interoperability;
import static interop.TopLevelFunctionKt.hi;
import static atomictest.AtomicTestKt.eq;

public class CallTopLevelFunction2 {
  public static void main(String[] args) {
    eq(hi(), "Hello!");
  }
}
```

If you don’t like the class name generated by Kotlin, you can change it using the `@JvmName` annotation:

```
// interoperability/ChangeName.kt
@file:JvmName("Utils")
package interop

fun salad() = "Lettuce!"
```

Now instead of `ChangeNameKt`, we use `Utils`:

```
// interoperability/MakeSalad.java
package interoperability;
import interop.Utils;
import static atomictest.AtomicTestKt.eq;

public class MakeSalad {
  public static void main(String[] args) {
    eq(Utils.salad(), "Lettuce!");
  }
}
```

You can find further details in the [documentation](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html).

### Adapting Java to Kotlin

One of Kotlin’s design goals is to take an existing Java type and adapt it to your needs. This ability is not restricted to library designers—the same logic can be applied to any external code base.

In [Recursion](javascript:void(0)), we created `Fibonacci.kt` to efficiently produce Fibonacci numbers. That implementation is limited by the size of the `Long` it returns. If you’d like to return larger values, the Java standard library includes the `BigInteger` class. A few lines of code morphs `BigInteger` into something that feels like a native Kotlin class:

```
// interoperability/BigInt.kt
package biginteger
import java.math.BigInteger

fun Int.toBigInteger(): BigInteger =
  BigInteger.valueOf(toLong())

fun String.toBigInteger(): BigInteger =
  BigInteger(this)

operator fun BigInteger.plus(
  other: BigInteger
): BigInteger = add(other)
```

The `toBigInteger()` extension functions converts any `Int` or `String` to a `BigInteger` by calling the `BigInteger` constructor and passing the receiver string as an argument.

Overloading the operator `BigInteger.plus()` allows you to write `number + other`. This makes working with `BigInteger` enjoyable compared to Java’s clumsy `number.plus(other)`.

Using `BigInteger`, `Recursion/Fibonacci.kt` easily converts to produce much larger results:

```
// interoperability/BigFibonacci.kt
package interop
import atomictest.eq
import java.math.BigInteger
import java.math.BigInteger.ONE
import java.math.BigInteger.ZERO

fun fibonacci(n: Int): BigInteger {
  tailrec fun fibonacci(
    n: Int,
    current: BigInteger,
    next: BigInteger
  ): BigInteger {
    if (n == 0) return current
    return fibonacci(
      n - 1, next, current + next)   // [1]
  }
  return fibonacci(n, ZERO, ONE)
}

fun main() {
  (0..7).map { fibonacci(it) } eq
  "[0, 1, 1, 2, 3, 5, 8, 13]"
  fibonacci(22) eq 17711.toBigInteger()
  fibonacci(150) eq
    "9969216677189303386214405760200"
      .toBigInteger()
}
```

All `Long`s were replaced with `BigInteger`. In `main()`, you see both `Int` and `String` converted to `BigInteger` using different `toBigInteger()` extension properties. In line **[1]** we use the `plus` operator to find the sum `current + next`; this is identical to the original version using `Long`.

`fibonacci(150)` overflows the `Recursion/Fibonacci.kt` version, but works fine after the conversion to `BigInteger`.

### Java Checked Exceptions & Kotlin

Java was predominantly patterned after the C++ language, which allowed you to specify the exceptions that a function might throw. The Java designers decided to go one step further and *force* anyone calling that function to catch every specified exception. This seemed like a good idea at the time, and thus was born *checked exceptions*—an experiment that, to our knowledge, has not been repeated in subsequent programming languages.

Here’s how Java forces you to catch checked exceptions in the process of opening, reading and closing a file. We only provide the basics to show the checked exceptions; you must actually write more complex code to correctly solve this problem in Java:

```
// interoperability/JavaChecked.java
package interoperability;
import java.io.*;
import java.nio.file.*;
import static atomictest.AtomicTestKt.eq;

public class JavaChecked {
  // Build path to current source file, based
  // on directory where Gradle is invoked:
  static Path thisFile = Paths.get(
    "DataFiles", "file_wubba.txt");
  public static void main(String[] args) {
    BufferedReader source = null;
    try {
      source = new BufferedReader(
        new FileReader(thisFile.toFile()));
    } catch(FileNotFoundException e) {
      // Recover from file-open error
    }
    try {
      String first = source.readLine();
      eq(first, "wubba lubba dub dub");
    } catch(IOException e) {
      // Recover from read() error
    }
    try {
      source.close();
    } catch(IOException e) {
      // Recover from close() error
    }
  }
}
```

Each of the above operations involves checked exceptions and must be placed inside a `try` block or Java produces compile-time errors for uncaught exceptions.

The only reason to `catch` an exception is if you can somehow recover from the problem. If it’s not something you can fix, there’s no point in writing a `catch` clause for that exception—just let it become an error report. In the above examples, recovery from the errors seems dubious, but you’re still forced to write the `try`-`catch` blocks.

Let’s rewrite this example in Kotlin:

```
// interoperability/KotlinChecked.kt
import atomictest.eq
import java.io.File

fun main() {
  File("DataFiles/file_wubba.txt")
    .readLines()[0] eq
    "wubba lubba dub dub"
}
```

Kotlin allows us to reduce the operation to a single line of code because it adds extension functions to the Java `File` class. At the same time, Kotlin eliminates the checked exceptions. If we wanted, we could surround intermediate operations with `try`-`catch` blocks, but Kotlin does not enforce checked exceptions. This provides error reporting without compelling you to write the additional noisy code.

Java libraries often use checked exceptions in situations that are outside the programmer’s control and are typically unrecoverable. In these cases, it’s best to catch the exception at the top level and restart the process, if possible. Requiring all intermediate levels to pass the exception only adds cognitive overhead when trying to understand the code.

If you’re writing Kotlin code that is called from Java and you must specify a checked exception, Kotlin provides the `@Throws` annotation to give this information to the Java caller:

```
// interoperability/AnnotateThrows.kt
package interop
import java.io.IOException

@Throws(IOException::class)
fun hasCheckedException() {
  throw IOException()
}
```

Here’s how `hasCheckedException()` is called from Java:

```
// interoperability/CatchChecked.java
package interoperability;
import interop.AnnotateThrowsKt;
import java.io.IOException;
import static atomictest.AtomicTestKt.eq;

public class CatchChecked {
  public static void main(String[] args) {
    try {
      AnnotateThrowsKt.hasCheckedException();
    } catch(IOException e) {
      eq(e, "java.io.IOException");
    }
  }
}
```

If you don’t handle the exception, the Java compiler issues an error message.

Although Kotlin includes language support for exception handling, it tends to emphasize error reporting and reserves exception handling for those rare situations where you can actually recover from a problem (almost exclusively I/O operations).

### Nullable Types & Java

Kotlin ensures that *pure* Kotlin code has no `null` errors, but when you call into Java, you have no such guarantees. In the following Java code, `get()` sometimes returns `null`:

```
// interoperability/JTool.java
package interoperability;

public class JTool {
  public static JTool get(String s) {
    if(s == null) return null;
    return new JTool();
  }
  public String method() {
    return "Success";
  }
}
```

To use `JTool` within Kotlin, you must know how `get()` behaves. You have three choices, shown here in the definitions of `a`, `b` and `c`:

```
// interoperability/PlatformTypes.kt
package interop
import interoperability.JTool
import atomictest.eq

object KotlinCode {
  val a: JTool? = JTool.get("")  // [1]
  val b: JTool = JTool.get("")   // [2]
  val c = JTool.get("")          // [3]
}

fun main() {
  with(KotlinCode) {
    a?.method() eq "Success"     // [4]
    b.method() eq "Success"
    c.method() eq "Success"      // [5]
    ::a.returnType eq
      "interoperability.JTool?"
    ::b.returnType eq
      "interoperability.JTool"
    ::c.returnType eq
      "interoperability.JTool!"  // [6]
  }
}
```

- **[1]** Specify the type as nullable.
- **[2]** Specify the type as non-nullable.
- **[3]** Use type inference.

The `with()` in `main()` allows us to refer to `a`, `b` and `c` without the `KotlinCode` qualification. Because the identifiers are inside an `object`, we can use member reference syntax and the `returnType` property to determine their types.

To initialize `a`, `b` and `c`, we pass a non-`null String` to `get()`, so `a`, `b` and `c` all end up with non-`null` references and each one can successfully call `method()`.

- **[4]** Because `a` is nullable, it must use `?.` during member function calls.
- **[5]** `c` behaves like a non-nullable reference and can be dereferenced without any additional checks.
- **[6]** Notice that `c` returns neither a nullable type nor a non-nullable type, but something entirely different: `JTool!`.

`Type!` is Kotlin’s *platform type*, and has no notation—you can’t write it into your code. It is used whenever Kotlin must infer a type outside its domain.

If a type comes from Java, accessing it can produce a `null` pointer exception (NPE). Here’s what happens when `JTool.get()` returns a `null` reference:

```
// interoperability/NPEOnPlatformType.kt
import interoperability.JTool
import atomictest.*

fun main() {
  val xn: JTool? = JTool.get(null)  // [1]
  xn?.method() eq null

  val yn = JTool.get(null)          // [2]
  yn?.method() eq null              // [3]
  capture {
    yn.method()                     // [4]
  } contains listOf("NullPointerException")

  capture {
    val zn: JTool = JTool.get(null) // [5]
  } eq "NullPointerException: " +
    "JTool.get(null) must not be null"
}
```

When you call a Java method like `JTool.get()` inside Kotlin, its return value (unless annotated as explained in the next section) is a platform type, which in this case is `JTool!`.

- **[1]** Because `xn` is of the nullable type `JTool?`, it can successfully receive a `null`. Assigning to a nullable type is safe, because Kotlin forces you to test for `null` using `?.` when calling `method()`.
- **[2]** At the point of definition, `yn` successfully receives the `null` without complaint because Kotlin infers it to be the platform type `JTool!`.
- **[3]** You can dereference `yn` by using a safe-access call `?.`, which in this case returns `null`.
- **[4]** However, using `?.` is not required. You can simply dereference `yn`. In this case you get a `NullPointerException` without any helpful message.
- **[5]** Assigning to a non-nullable type can produce an NPE. Kotlin checks for nullity at the point of assignment. The initialization of `zn` fails because the declared type `JTool` promises that `zn` is not nullable, but it receives a `null` which produces a `NullPointerException`, this time with a helpful message.

The exception message contains detailed information about the expression that produced the `null`: `NullPointerException: JTool.get(null) must not be null`. Even though it’s a runtime exception, the comprehensive error message makes the problem much easier than fixing a regular NPE.

A platform type contains the *least* amount of information available for that type. In this case, it only tells you that the type is `JTool`. It might or might not be nullable—when using an inferred platform type you simply don’t know.

You can’t explicitly declare a platform type (e.g. `JTool!`). You can only observe a platform type in error messages, or when you display the inferred type as in `PlatformTypes.kt`, or by checking the type within the IDE.

When working on a mixed Kotlin and Java project, you may or may not have control over the Java code base. When using an external Java library, you can’t modify the source code, so you must work with platform types.

Platform types provide seamless Java interoperability, and maintain the consistency of type inference. However, don’t rely on them. The proper strategy when calling un-annotated Java code is to avoid type inference, and instead understand whether or not the code you are calling can produce `null`s.

### Nullability Annotations

If you control the Java code base, you can add *nullability annotations* to the Java code and avoid subtle NPE errors. `@Nullable` and `@NotNull` tell Kotlin to treat a Java type as nullable or non-nullable, respectively. Here we add Kotlin nullability annotations to `JTool.java`:

```
// interoperability/AnnotatedJTool.java
package interoperability;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class AnnotatedJTool {
  @Nullable
  public static JTool
  getUnsafe(@Nullable String s) {
    if(s == null) return null;
    return getSafe(s);
  }
  @NotNull
  public static JTool
  getSafe(@NotNull String s) {
    return new JTool();
  }
  public String method() {
    return "Success";
  }
}
```

Applying an annotation to a Java parameter affects only that parameter. Applying an annotation in front of a Java method modifies the return type.

When you call `getUnsafe()` and `getSafe()` in Kotlin, Kotlin treats the `AnnotatedJTool` member functions as native Kotlin nullable or non-nullable:

```
// interoperability/AnnotatedJava.kt
package interop
import interoperability.AnnotatedJTool
import atomictest.eq

object KotlinCode2 {
  val a = AnnotatedJTool.getSafe("")
  // Doesn't compile:
  // val b = AnnotatedJTool.getSafe(null)
  val c = AnnotatedJTool.getUnsafe("")
  val d = AnnotatedJTool.getUnsafe(null)
}

fun main() {
  with(KotlinCode2) {
    ::a.returnType eq
      "interoperability.JTool"
    ::c.returnType eq
      "interoperability.JTool?"
    ::d.returnType eq
      "interoperability.JTool?"
  }
}
```

`@NotNull JTool` is transformed to Kotlin’s non-nullable type `JTool`, and the annotated `@Nullable JTool` is transformed to Kotlin’s `JTool?`. You can see this in the types shown in `main()` for `a`, `c`, and `d`.

You can’t pass a nullable argument when a non-nullable argument is expected, even if it’s a Java type annotated with `@NotNull`, so Kotlin won’t compile `AnnotatedJTool.getSafe(null)`.

Different kinds of nullability annotations are supported, using different names:

- `@Nullable` and `@CheckForNull` are specified by the JSR-305 standard.
- `@Nullable` and `@NonNull` are used in Android.
- `@Nullable` and `@NotNull` are supported by JetBrains tools.
- There are others. You can find the full list in the Kotlin [documentation](https://kotlinlang.org/docs/java-interop.html#nullability-annotations).

Kotlin detects default nullability annotations for a Java package or class, as specified in the JSR-305 standard. If it’s `@NotNull` by default, you should explicitly specify only `@Nullable` annotations. If it’s `@Nullable` by default, you should explicitly specify only `@NotNull` annotations. The [documentation](https://kotlinlang.org/docs/java-interop.html#jsr-305-support) contains the technical details for choosing the default annotation.

If you develop mixed Kotlin and Java projects, your applications will be safer if you use nullability annotations in your Java code.

### Collections & Java

This book doesn’t require Java knowledge. However, when you write code in Kotlin for the Java Virtual Machine (JVM), it’s helpful to be familiar with the Java standard collections library, because Kotlin uses it to create its own collections.

The Java collections library is a set of classes and interfaces that implement collection data structures, such as lists, sets and maps. These data structures usually have clear and simple interfaces, but for speed may have complicated implementations.

New languages typically create their own collections library from scratch. For example, the Scala language has its own collections library which in many ways surpasses the Java collections library, but also makes it more challenging to mix Scala and Java.

Kotlin’s collections library is intentionally *not* rewritten from scratch. Instead, it consists of improvements atop the Java collections library. For example, when you create a mutable `List`, you’re actually using Java’s `ArrayList`:

```
// interoperability/HiddenArrayList.kt
import atomictest.eq

fun main() {
  val list = mutableListOf(1, 2, 3)
  list.javaClass.name eq
    "java.util.ArrayList"
}
```

For seamless interoperability with Java code, Kotlin uses the interfaces from the Java standard library, and often the same implementations. This produces three benefits:

1. Kotlin code can easily mix with Java code. No additional conversion is required when passing Kotlin collections to Java code.
2. Years of performance tuning in the Java standard library is automatically available to Kotlin programmers.
3. The standard library included with a Kotlin application is small, because it uses Java collections rather than defining its own. The Kotlin standard library consists primarily of extension functions that improve the Java collections.

Kotlin also fixes a design problem. In Java all collection interfaces are mutable. For example, `java.util.List` has methods `add()` and `remove()` that modify the `List`. As we’ve shown throughout this book, mutability is the source of a significant number of programming problems. Thus, in Kotlin, the default `Collection` type is read-only:

```
// interoperability/ReadOnlyByDefault.kt
package interop

data class Animal(val name: String)

interface Zoo {
  fun viewAnimals(): Collection<Animal>
}

fun visitZoo(zoo: Zoo) {
  val animals = zoo.viewAnimals()
  // Compile-time error:
  // animals.add(Animal("Grumpy Cat"))
}
```

Read-only collections are safer and more bug-free because they prevent accidental modification.

Java provides a partial solution for collection immutability: when returning a collection you can place it inside a special wrapper that throws an exception for any attempt to modify the underlying collection. This doesn’t produce static type checking, but can still prevent subtle bugs. However, you must remember to wrap the collection to make it read-only, whereas in Kotlin you must be explicit when you *want* a mutable collection.

Kotlin has separate interfaces for mutable and read-only collections:

- `Collection`/`MutableCollection`
- `List`/`MutableList`
- `Set`/`MutableSet`
- `Map`/`MutableMap`

These duplicate the interfaces from the Java standard library:

- `java.util.Collection`
- `java.util.List`
- `java.util.Set`
- `java.util.Map`

In Kotlin, as in Java, `Collection` is a supertype for both `List` and `Set`. `MutableCollection` extends `Collection` and is a supertype of `MutableList` and `MutableSet`. Here’s the basic structure:

```
// interoperability/CollectionStructure.kt
package collectionstructure

interface Collection<E>
interface List<E>: Collection<E>
interface Set<E>: Collection<E>
interface Map<K, V>
interface MutableCollection<E>
interface MutableList<E>:
  List<E>, MutableCollection<E>
interface MutableSet<E>:
  Set<E>, MutableCollection<E>
interface MutableMap<K, V>: Map<K, V>
```

For simplicity, we show only the names and not the full declarations from the Kotlin standard library.

Kotlin mutable collections match their Java counterparts. If you compare `MutableCollection` from `kotlin.collections` with `java.util.List`, you’ll see that they declare the same member functions (*methods*, in Java terminology). Kotlin’s `Collection`, `List`, `Set` and `Map` also duplicate Java’s interfaces, but without any mutation methods.

Both `kotlin.collections.List` and `kotlin.collections.MutableList` are visible from Java as `java.util.List`. These interfaces are special: they exist only in Kotlin, but at the bytecode level they are both replaced with Java’s `List`.

A Kotlin `List` can be cast to a Java `List`:

```
// interoperability/JavaList.kt
import atomictest.eq

fun main() {
  val list = listOf(1, 2, 3)
  (list is java.util.List<*>) eq true
}
```

This code produces a warning:

- *This class shouldn’t be used in Kotlin.*
- *Use kotlin.collections.List or kotlin.collections.MutableList instead.*

This is a reminder to use Kotlin’s interfaces, not Java’s, when programming in Kotlin.

Keep in mind that read-only is not the same as immutable. A collection cannot be changed using a read-only reference, but it can still change:

```
// interoperability/ReadOnlyCollections.kt
import atomictest.eq

fun main() {
  val mutable = mutableListOf(1, 2, 3)
  // Read-only reference to a mutable list:
  val list: List<Int> = mutable
  mutable += 4
  // list has changed:
  list eq "[1, 2, 3, 4]"
}
```

Here, the read-only `list` references a `MutableList`, which can then be changed by manipulating `mutable`. Because all Java collections are mutable, Java code can modify a read-only Kotlin collection, even if you pass it via a read-only reference.

Kotlin collections don’t produce full safety, but provide a good compromise between having a better library and maintaining compatibility with Java.

### Java Primitive Types

In Kotlin, you call a constructor to create an object, but in Java you must use `new` to produce an object. `new` places the resulting object on the heap. Such types are called *reference types*.

Creating objects on the heap can be inefficient for basic types such as numbers. For these types, Java falls back on the approach taken by C and C++: Instead of creating the variable using `new`, a non-reference “automatic” variable is created that holds the value directly. Automatic variables are placed on the stack, making them much more efficient. Such types get special treatment by the JVM and are called *primitive types*.

There are a fixed number of primitive types: `boolean`, `int`, `long`, `char`, `byte`, `short`, `float` and `double`. Primitive types always contain a non-`null` value, and they can’t be used as generic arguments. If you need to store `null` or use such types as generic arguments, you can use the corresponding reference type defined in the Java standard library, such as `java.lang.Boolean` or `java.lang.Integer`. These types are often called *wrapper types* or *boxed types* to emphasize that they only wrap the primitive value and store it on the heap.

```
// interoperability/JavaWrapper.java
package interoperability;
import java.util.*;

public class JavaWrapper {
  public static void main(String[] args) {
    // Primitive type
    int i = 10;
    // Wrapper types
    Integer iOrNull = null;
    List<Integer> list = new ArrayList<>();
  }
}
```

Java distinguishes between reference types and primitive types, but Kotlin does not. You use the same type `Int` both for defining an integer `var`/`val` or using it as a generic argument. At the JVM level, Kotlin employs the same primitive type support. When possible, Kotlin replaces `Int` with a primitive `int` in the bytecode. A nullable `Int?` or `Int` used as a generic argument can only be represented using the wrapper type:

```
// interoperability/KotlinWrapper.kt
package interop

fun main() {
  // Generates a primitive int:
  val i = 10
  // Generates wrapper types:
  val iOrNull: Int? = null
  val list: List<Int> = listOf(1, 2, 3)
}
```

You normally don’t need to think much about whether primitives or wrappers are generated by the Kotlin compiler, but it’s useful to know how it’s implemented on the JVM.

- \-

The [documentation](https://kotlinlang.org/docs/java-interop.html) explains more about the nuances of Kotlin/Java interoperability.