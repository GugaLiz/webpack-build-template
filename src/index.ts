
class Demo {
    private name: string;

    public init(name: string) {
        this.name = name;
        console.log(`Hello ${this.name}`);
        return name;
    }

}

export default Demo;
