//3. Напишете програма, която чете от конзолата цяло число n и печата числата от 2^0 до 2^n.

using System;

class PoweredTwo
{
    static void Main()
    {
        int pow = int.Parse(Console.ReadLine());
        Console.WriteLine("Two powered from 0 to {0} is:", pow);

        for (int i = 0; i <= pow; i++)
        {
            Console.WriteLine(Math.Pow(2, i));
        }
    }
}
