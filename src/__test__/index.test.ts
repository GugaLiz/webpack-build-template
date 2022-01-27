import Demo from '../index';

const demo = new Demo();


describe('测试demo', () => {
    it('输出名字', () => {
        const expectUrlToBeAllow = (name: string) => {
            expect(demo.init(name)).toEqual(name);
        };
        expectUrlToBeAllow('名字');
    });
});
