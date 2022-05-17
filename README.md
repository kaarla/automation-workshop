# testcafe-example

Execute using:

```bash
testcafe [browser] page_model/test/[file]
```

Example:

```bash
testcafe chrome page_model/test/LoginTest.js
```

This project run 10 test cases in the e-comerce lab [https://www.saucedemo.com/](https://www.saucedemo.com/)

### Login tests

- Users can login using valid credentials
- Users cannot login using invalid credentials

### Cart tests

- Finish purchase providing information
- Try to finish purchase without providing information
- Check final order items before confirm
- Check final order items and confirm

### Inventory tests

- Users can logout from inventory page
- Users can navigate to the shopping cart page from inventory page
- Users can add one item to the cart
- Users can add more than one item to the cart
