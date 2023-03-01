interface Bird{
    eat():void;

}

interface FlyingBird{
    fly(): void;
}
interface SwimmerBird{
    swin(): void;
}
interface RunningBird{
    run(): void;
}

class Tucan implements Bird, FlyingBird{
    public fly(){}
    public eat(){}

}

class HumminBird implements Bird, FlyingBird{
    public fly(){}
    public eat(){}

}
class Ostrich implements Bird, RunningBird{
    public eat(){}
    public run() {}

}

class Pinguin implements Bird,SwimmerBird{
    public eat(){}
    public swin(){}
    
}