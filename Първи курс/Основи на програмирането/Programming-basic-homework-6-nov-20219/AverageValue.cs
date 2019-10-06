//5.Съставете цикличен алгоритъм, изчисляващ средно аритметично на n-числа, чийто стойности се въвеждат от потребителя.

using System;

class AverageValue
{
    static void Main()
    {
        string keepEnter = " ";
        int counter = 1;
        int inTotal = 0;
        int userInput = 0;
        bool isInt = true;

        while (keepEnter == " ")
        {
            isInt = Int32.TryParse(Console.ReadLine(), out userInput);

            if (isInt)
            {
                inTotal+= userInput;
                Console.WriteLine("Average is: {0}", inTotal/ counter);
                counter++;
            }
            else
            {
                keepEnter = "exit";
            }
        }
    }
}

