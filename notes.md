# React Router Dom

## Loader

the url, layour and data are very very coupled in applications
therefore we need a way to make sure they are linked, the apis to
do so are loader and useLoaderData

we provide the data(array/object i am not sure) to the routers
loader property.
then to use this data inside the childrens of that route we use the
useLoaderData hook

Using react-router, while forms are submitted instead of serializing
the data and sending it to the server it will process it in the client 
and send it to the routes `actions` 

using this will let the react-router to revalidate the loader if changed
and let the ui re-renders

the revalidation makes sure if the loaders data is changed, And if so then it will
update the ui.

when there is a form change from the Form component of react-router-dom the
specific action will handle the change. the action can take the request(the form data),
the params (which element of the list we are on)

P.S Loaders and actions will return a response since they also recieve request

we can import `NavLink` from react-router, which will help us identify lists by 
providing `isActive, and isPending`  to identify the active list and the clicked list then we can add styles accordingly.

* `useNavigation` hook from react-router-dom will help us by providing the state of 
the page, which includes `idle`, `submitting`. and `loading`

* `useNavigate` hook from react-router-dom will expose the history and use -1 to go back to the last page.

when trowing an `ERROR` instead of just throwing the error alone, add `errorElement` to the route, this way we can carry on with other tasks that just having to deal with the error and then click on the refresh button

handlig crud is very easy with react router,
create a `Form` then create an action that handles the form we can get the data from the form using the request.`formData()`

## Learning

* [ ] Client side catching
* [ ] Optimistic UI
