//1. Строителни работници трябва да пренесат общо x тухли.Работниците са w на брой и работят едновременно.
//Те превозват тухлите в колички, всяка с вместимост m тухли.Напишете програма,
//която прочита целите числа x, w и m и пресмята колко най-малко курса трябва да направят
//работниците за да превозят тухлите.
//От конзолата се четат 3 цели числа (по едно на ред):
//•	Броят тухли x се чете от първия ред.
//•	Броят работници w се чете от втория ред.
//•	Вместимостта на количката m се чете от третия ред.
//Всички входни числа са цели и в диапазона [1…1000].
//Да се отпечата на конзолата минималният брой курсове, необходими за превозване на тухлите.

using System;

class ConstructionWorkers
{
    static void Main()
    {
        Console.WriteLine("Please enter bricks number:");
        //x
        int bricks = int.Parse(Console.ReadLine());

        Console.WriteLine("Please enter workers number:");
        //w
        int workers = int.Parse(Console.ReadLine());

        Console.WriteLine("Please enter wheelbarrow capacity:");
        //m
        int wheelbarrowCapacity = int.Parse(Console.ReadLine());

        int result = bricks / (workers * wheelbarrowCapacity);
        Console.WriteLine("Workers need to make {0} turns.", result);

    }
}
