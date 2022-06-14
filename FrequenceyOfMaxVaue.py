def frequencyOfMaxValue(numbers,q):
    n=len(numbers)
    for index in q:
        maxvalue=-1
        for i in range(index-1,n):
            if numbers[i]>maxvalue:
                maxvalue=numbers[i]
        count=0
        for i in range(index-1,n):
            if numbers[i]==maxvalue:
                count+=1
        print(count)
        
# nums = [ 5, 4, 5, 3, 2 ] and query = [ 1, 2, 3, 4, 5 ]

# Answer would be [ 2, 1, 1, 1, 1 ].

# For the first query, we have to find the count of maximum value( which is 5) in the subarray [ 5, 4, 5, 3, 2 ], which is 2.

# For the second query, the count of maximum value(which is 5) in the subarray [4, 5, 3, 2 ], which is 1.

# Similarly, for the fourth query, the count of maximum value(which is 3) in the subarray [ 3, 2 ].
