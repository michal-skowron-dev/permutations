let input = "ABCB";
solve();

function solve()
{
    let sequenceList = sequence(input.length);

    let permutationList = permutation(sequenceList);
    show(permutationList);

    let nPermutationList = nPermutation(permutationList);
    show(nPermutationList);
    return;
}

function factorial(number)
{
    let counter = 1;

    for (let i = 2; i <= number; i++)
    {
        counter *= i;
    }

    return counter;
}

function sequence(length)
{
    let combinations = factorial(length);
    console.log("Combinations: " + combinations);

    let list = [];
    list = clearList(list, combinations);

    for (let i = 0; i < length; i++)
    {
        let repeats = factorial(length - (i + 1));
        let counter = 0;

        for (let j = 0; j < combinations;)
        {
            for (let k = 0; k < repeats; k++)
            {
                list[j] += (counter % (length - i)).toString();
                j++;
            }

            counter++;
        }
    }

    return list;
}

function clearList(list, range)
{
    for (let i = 0; i < range; i++)
    {
        list[i] = "";
    }

    return list;
}

function permutation(sequenceList)
{
    let list = [];
    list = clearList(list, sequenceList.length);

    for (let i = 0; i < sequenceList.length; i++)
    {
        let word = input;
        let j = 0;

        while (word.length != 0)
        {
            list[i] += word[sequenceList[i][j]];
            word = cut(word, Number(sequenceList[i][j]));
            j++;
        }
    }

    return list;
}

function nPermutation(permutationList)
{
    let list = [];

    for (let i = 0; i < permutationList.length; i++)
    {
        if (permutationList[i] != "")
        {
            list.push(permutationList[i]);
        }
        else
        {
            continue;
        }

        for (let j = i; j < permutationList.length; j++)
        {
            if (permutationList[j] == list[list.length - 1])
            {
                permutationList[j] = "";
            }
        }
    }

    console.log("\n" + "Combinations (no repeats):" + list.length);
    return list;
}

function cut(word, index)
{
    return word.slice(0, index) + word.slice(index + 1);
}

function show(list)
{
    for (let i = 0; i < list.length; i++)
    {
        console.log(list[i]);
    }
}