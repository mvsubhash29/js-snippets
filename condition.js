// removal of duplicate elements in an array
// flattern array - [[1,2], 3, [5,6,[4]]] -> [1,2,3,5,6,4]

function foo() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0)
  }
}

foo();

// IIFE -> immediate invoke function expression
function bar() {
  for (var i = 0; i < 10; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i)
      })
    })(i);
  }
}

bar();

// shallow - deep comparsion / copy


const outer = {
  prop: 1,
  prop: 2,
  inner: {
    propinner: 2
  }
}


const newOuter = {...outer}; // shallow // deep

newOuter.prop = 10;
outer.prop = 1
newOuter.prop = 10

newOuter.inner.propinner = 20;
newOuter.inner.propinner // 20
outer.inner.propinner /// 20





