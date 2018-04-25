describe('default parameters', () => {

  it('can be triggered when the incoming argument is undefined', () => {
    function shoot(name = 'Steve') {
      return name
    }

    expect(shoot('Chris')).toBe(/* YOUR ANSWER */ 'Chris')
    expect(shoot(undefined)).toBe(/* YOUR ANSWER */ 'Steve')
    expect(shoot(null)).toBe(/* YOUR ANSWER */null)
    expect(shoot()).toBe(/* YOUR ANSWER */'Steve')
  })

  it('are not included in arguments', () => {
    function shoot(name = 'Steve') {
      return arguments.length
    }

    expect(shoot('Chris')).toBe(/* YOUR ANSWER */1)
    expect(shoot(null)).toBe(/* YOUR ANSWER */ 1)
    expect(shoot()).toBe(/* YOUR ANSWER */ 0)
  })

  it('can trigger a function call', () => {
    let triggerCount = 0

    function shoot(name = getDefault()) {
      return name
    }

    function getDefault() {
      triggerCount++
      return 'Steve'
    }

    expect(triggerCount).toBe(/* YOUR ANSWER */ 0)
    expect(shoot('Chris')).toBe(/* YOUR ANSWER */'Chris')
    expect(shoot()).toBe(/* YOUR ANSWER */ 'Steve')
    expect(shoot(undefined)).toBe(/* YOUR ANSWER */ 'Steve')
    expect(triggerCount).toBe(/* YOUR ANSWER */2)
  })

  it('can default all arguments, optionally', () => {
    // Modify the method signature of `myFunction` to allow for all args to be optional

    function myFunction({name = '', age = 0, favoriteBand = ''} = {}) {
      expect(name).toBeDefined()
      expect(age).toBeDefined()
      expect(favoriteBand).toBeDefined()
    }
    

    myFunction({name: 'John', age: 40, favoriteBand: 'The Beatles'})
    myFunction({name: 'John', age: 40})
    myFunction({name: 'John'})
    myFunction({})
    myFunction()
  })

})
