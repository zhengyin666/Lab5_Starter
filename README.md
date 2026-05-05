# Lab 5 - Starter
Name : Zhengyin Yang
- [Expose page](https://zhengyin666.github.io/Lab5_Starter/expose.html)
- [Explore page](https://zhengyin666.github.io/Lab5_Starter/explore.html)

1) I would not use only a unit test to test the full “message” feature. Sending a message involves multiple parts working together, such as the text input, send button, user data, backend/server logic, and displaying the message to another user. A unit test could test small pieces of this feature, but the full message feature should be tested more with integration or end-to-end testing.

2) Yes, I would use a unit test to test the “max message length” feature. This feature has a clear and small rule: the user should not be able to type more than 80 characters. Since it is focused on one specific behavior, a unit test would be a good way to check that the limit works correctly.
