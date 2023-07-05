#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'isBalanced' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def isBalanced(s):
    # Write your code here
    stack = []
    brackets = {"{":"}", "[":"]", "(":")"}
    for char in s:
        if char in ["(", "{", "["]:
            stack.append(char)
        else:
            if stack:
                top = stack.pop()
                if char != brackets[top]:
                    return "NO"

            else:
                return "NO"
    if stack:
        return "NO"
    else:
        return "YES"
                
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        s = input()

        result = isBalanced(s)

        fptr.write(result + '\n')

    fptr.close()
