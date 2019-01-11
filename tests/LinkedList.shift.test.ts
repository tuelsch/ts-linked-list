import LinkedList from '../src/LinkedList';

describe('LinkedList.shift', () => {
  it('Correctly shifts', () => {
    const l = new LinkedList(1, 2, 3);
    const value = l.shift();
    expect(value).toBe(1);
    expect(l.length).toBe(2);
    expect(l.head.data).toBe(2);
  });

  it('Shifts an empty list', () => {
    const l = new LinkedList();
    const value = l.shift();
    expect(value).toBe(undefined);
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });

  it('Shifts the only remaining element', () => {
    const l = new LinkedList(1);
    l.shift();
    expect(l.length).toBe(0);
    expect(l.head).toBe(null);
    expect(l.tail).toBe(null);
  });
});