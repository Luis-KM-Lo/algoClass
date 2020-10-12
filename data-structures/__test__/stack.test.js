const { test, expect } = require('@jest/globals');
const Stack = require('../stack');

describe('Stack', () => {
	let stack, storage;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should have a push and pop method', () => {
    expect(stack).toHaveProperty('push');
    expect(stack).toHaveProperty('pop');
    expect(typeof stack.push).toBe('function');
    expect(typeof stack.pop).toBe('function');
  });

  test('should push elements to stack', () => {
		stack.push(4);
		stack.push(2);
    expect(stack.storage).toEqual("4-2");
  });

  test('should pop most recently pushed elements', () => {
    stack.push(123);
    stack.push(72);
    expect(stack.pop()).toEqual("72");
    expect(stack.pop()).toEqual("123");
  });

  test('should return undefined when popping empty stack', () => {
    expect(stack.pop()).toEqual(undefined);
    stack.push(80);
    stack.push(21);
    expect(stack.pop()).toEqual("21");
    expect(stack.pop()).toEqual("80");
	});
	
	test('should have a peek and sort method', () => {
    expect(stack).toHaveProperty('peek');
    expect(stack).toHaveProperty('sort');
    expect(typeof stack.peek).toBe('function');
    expect(typeof stack.sort).toBe('function');
	});
	
	test('should peek the first element of the stack', () => {
		stack.push(80);
		stack.push(21);
		expect(stack.peek()).toEqual("80")
	});
	
	test('should sort the stack', () => {
		stack.push(80);
		stack.push(21);
		stack.push(31);
		stack.sort()
		expect(stack.storage).toEqual("21-31-80")
	});
})
