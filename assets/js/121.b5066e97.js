(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{495:function(e,t,a){"use strict";a.r(t);var s=a(44),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"var-val"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-val"}},[e._v("#")]),e._v(" "),a("code",[e._v("var")]),e._v(" & "),a("code",[e._v("val")])]),e._v(" "),a("blockquote",[a("p",[e._v("When an identifier holds data, you must decide whether it can be reassigned.")])]),e._v(" "),a("p",[e._v("You create "),a("em",[e._v("identifiers")]),e._v(" to refer to elements in your program. The most basic decision for a data identifier is whether it can change its contents during program execution, or if it can only be assigned once. This is controlled by two keywords:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("var")]),e._v(", short for "),a("em",[e._v("variable")]),e._v(", which means you can reassign its contents.")]),e._v(" "),a("li",[a("code",[e._v("val")]),e._v(", short for "),a("em",[e._v("value")]),e._v(", which means you can only initialize it; you cannot reassign it.")])]),e._v(" "),a("p",[e._v("You define a "),a("code",[e._v("var")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" identifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" initialization\n")])])]),a("p",[e._v("The "),a("code",[e._v("var")]),e._v(" keyword is followed by the identifier, an equals sign and then the initialization value. The identifier begins with a letter or an underscore, followed by letters, numbers and underscores. Upper and lower case are distinguished (so "),a("code",[e._v("thisvalue")]),e._v(" and "),a("code",[e._v("thisValue")]),e._v(" are different).")]),e._v(" "),a("p",[e._v("Here are some "),a("code",[e._v("var")]),e._v(" definitions:")]),e._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// VarAndVal/Vars.kt")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fun")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" whole "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// [1]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" fractional "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.4")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// [2]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" words "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Twas Brillig"')]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// [3]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("whole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("fractional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("words"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Output:\n11\n1.4\nTwas Brillig\n*/")]),e._v("\n")])])]),a("p",[e._v("In this book we mark lines with commented numbers in square brackets so we can refer to them in the text like this:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("[1]")]),e._v(" Create a "),a("code",[e._v("var")]),e._v(" named "),a("code",[e._v("whole")]),e._v(" and store "),a("code",[e._v("11")]),e._v(" in it.")]),e._v(" "),a("li",[a("strong",[e._v("[2]")]),e._v(" Store the “fractional number” "),a("code",[e._v("1.4")]),e._v(" in the "),a("code",[e._v("var fractional")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("[3]")]),e._v(" Store some text (a "),a("code",[e._v("String")]),e._v(") in the "),a("code",[e._v("var words")]),e._v(".")])]),e._v(" "),a("p",[e._v("Note that "),a("code",[e._v("println()")]),e._v(" can take any single value as an argument.")]),e._v(" "),a("p",[e._v("As the name "),a("em",[e._v("variable")]),e._v(" implies, a "),a("code",[e._v("var")]),e._v(" can vary. That is, you can change the data stored in a "),a("code",[e._v("var")]),e._v(". We say that a "),a("code",[e._v("var")]),e._v(" is "),a("em",[e._v("mutable")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// VarAndVal/AVarIsMutable.kt")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fun")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n  sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n  sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Output:\n6\n*/")]),e._v("\n")])])]),a("p",[e._v("The assignment "),a("code",[e._v("sum = sum + 2")]),e._v(" takes the current value of "),a("code",[e._v("sum")]),e._v(", adds two, and assigns the result back into "),a("code",[e._v("sum")]),e._v(".")]),e._v(" "),a("p",[e._v("The assignment "),a("code",[e._v("sum += 3")]),e._v(" means the same as "),a("code",[e._v("sum = sum + 3")]),e._v(". The "),a("code",[e._v("+=")]),e._v(" operator takes the previous value stored in "),a("code",[e._v("sum")]),e._v(" and increases it by "),a("code",[e._v("3")]),e._v(", then assigns that new result back to "),a("code",[e._v("sum")]),e._v(".")]),e._v(" "),a("p",[e._v("Changing the value stored in a "),a("code",[e._v("var")]),e._v(" is a useful way to express changes. However, when the complexity of a program increases, your code is clearer, safer and easier to understand if the values represented by your identifiers cannot change—that is, they cannot be reassigned. We specify an unchanging identifier using the "),a("code",[e._v("val")]),e._v(" keyword instead of "),a("code",[e._v("var")]),e._v(". A "),a("code",[e._v("val")]),e._v(" can only be assigned once, when it is created:")]),e._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("val")]),e._v(" identifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" initialization\n")])])]),a("p",[e._v("The "),a("code",[e._v("val")]),e._v(" keyword comes from "),a("em",[e._v("value")]),e._v(", indicating something that cannot change—it is "),a("em",[e._v("immutable")]),e._v(". Choose "),a("code",[e._v("val")]),e._v(" instead of "),a("code",[e._v("var")]),e._v(" whenever possible. The "),a("code",[e._v("Vars.kt")]),e._v(" example at the beginning of this atom can be rewritten using "),a("code",[e._v("val")]),e._v("s:")]),e._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// VarAndVal/Vals.kt")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fun")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("val")]),e._v(" whole "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// whole = 15 // Error   // [1]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("val")]),e._v(" fractional "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.4")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("val")]),e._v(" words "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Twas Brillig"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("whole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("fractional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("words"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Output:\n11\n1.4\nTwas Brillig\n*/")]),e._v("\n")])])]),a("ul",[a("li",[a("strong",[e._v("[1]")]),e._v(" Once you initialize a "),a("code",[e._v("val")]),e._v(", you can’t reassign it. If we try to reassign "),a("code",[e._v("whole")]),e._v(" to a different number, Kotlin complains, saying “Val cannot be reassigned.”")])]),e._v(" "),a("p",[e._v("Choosing descriptive names for your identifiers makes your code easier to understand and often reduces the need for comments. In "),a("code",[e._v("Vals.kt")]),e._v(", you have no idea what "),a("code",[e._v("whole")]),e._v(" represents. If your program is storing the number 11 to represent the time of day when you get coffee, it’s more obvious to others if you name it "),a("code",[e._v("coffeetime")]),e._v(" and easier to read if it’s "),a("code",[e._v("coffeeTime")]),e._v(" (following Kotlin style, we make the first letter lowercase).")]),e._v(" "),a("ul",[a("li",[e._v("-")])]),e._v(" "),a("p",[a("code",[e._v("var")]),e._v("s are useful when data must change as the program is running. This sounds like a common requirement, but turns out to be avoidable in practice. In general, your programs are easier to extend and maintain if you use "),a("code",[e._v("val")]),e._v("s. However, on rare occasions it’s too complex to solve a problem using only "),a("code",[e._v("val")]),e._v("s. For that reason, Kotlin gives you the flexibility of "),a("code",[e._v("var")]),e._v("s. However, as you spend more time with "),a("code",[e._v("val")]),e._v("s you’ll discover that you almost never need "),a("code",[e._v("var")]),e._v("s and that your programs are safer and more reliable without them.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);