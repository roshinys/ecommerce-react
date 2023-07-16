export const createCart = async (cart) => {
  try {
    const email = localStorage.getItem("email");
    const username = email.split("@")[0];
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/carts/${username}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to Add Product To Cart");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    alert(err);
  }
};

export const getCart = async () => {
  try {
    const email = localStorage.getItem("email");
    if (!email) {
      console.log("login first please");
      return [];
    }
    const username = email.split("@")[0];
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/carts/${username}.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Cart");
    }
    const data = await response.json();
    const cartItems = [];
    for (const key in data) {
      const cart = {
        id: key,
        title: data[key].title,
        price: parseInt(data[key].price),
        quantity: 1,
        productId: data[key].productId,
      };
      cartItems.push(cart);
    }
    return cartItems;
  } catch (err) {
    alert(err);
  }
};

export const updatecart = async (cart) => {
  try {
    const quantity = parseInt(cart.quantity) + 1;
    const updatedCart = { ...cart, quantity: quantity };
    const email = localStorage.getItem("email");
    if (!email) {
      console.log("login first please");
      return [];
    }
    const username = email.split("@")[0];
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/carts/${username}/${cart.id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCart),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to updat cart");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    alert(err);
  }
};

export const removeCart = async (cartId) => {
  try {
    const email = localStorage.getItem("email");
    if (!email) {
      console.log("Login first, please.");
      return;
    }
    const username = email.split("@")[0];
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/carts/${username}/${cartId}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to remove cart item");
    }
    return;
  } catch (err) {
    alert(err);
  }
};
