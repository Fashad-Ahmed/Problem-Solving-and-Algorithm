a = "Hello"
b = "World"

a = a + b
b = a[:len(a) - len(b)]
a = a[len(b):]

print("After swapping:")
print("a =", a)
print("b =", b)
