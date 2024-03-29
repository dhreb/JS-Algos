// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

// I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

// Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)

// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

const takeOutOrders1 = [1, 3, 5]
const dineInOrders1 = [2, 4, 6]
const servedOrders1 = [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

const takeOutOrders2 = [17, 8, 24]
const dineInOrders2 = [12, 19, 2]
const servedOrders2 = [17, 8, 12, 19, 24, 2]
// would be first-come, first-served.

// Note: Order numbers are arbitrary. They do not have to be in increasing order.

const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {

  // Check if we're serving orders first-come, first-served
  let takeOutCount = 0
  let dineInCount = 0

  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] === takeOutOrders[takeOutCount]) {
      takeOutCount++
    } else if (servedOrders[i] === dineInOrders[dineInCount]) {
      dineInCount++
    } else {
      return false
    }
  }

  if (takeOutCount === takeOutOrders.length && dineInCount === dineInOrders.length) {
    return true
  } else {
    return false
  }
}

console.log(isFirstComeFirstServed(takeOutOrders1, dineInOrders1, servedOrders1))
console.log(isFirstComeFirstServed(takeOutOrders2, dineInOrders2, servedOrders2))
