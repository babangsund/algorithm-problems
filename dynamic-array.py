""" https://www.hackerrank.com/challenges/dynamic-array/problem """


def dynamicArray(n, queries):
    seqList = [[] for x in range(n)]
    lastAnswer = 0
    result = []

    for q in queries:
        [qType, seqIndex, number] = q

        index = (seqIndex ^ lastAnswer) % n
        seq = seqList[index]

        if qType == 1:
            seq.append(number)
        if qType == 2:
            lastAnswer = seq[number % len(seq)]
            result.append(lastAnswer)

    return result
