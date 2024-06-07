import {Box} from "@mui/material";
import './App.css';
import PageNotFound from "./components/routes/PageNotFound.tsx";
import {useContext, useEffect} from "react";
import PostsContext from "./context/postscontext.ts";

const postsData = [
    {
        "name": "John Doe",
        "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "title": "Understanding Lorem Ipsum",
        "category": "Education",
        "date": "2023-06-01",
        "image": "https://picsum.photos/200/300?random=1"
    },
    {
        "name": "Jane Smith",
        "post": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean lacinia mauris vel est. Suspendisse lacinia nisi at nunc gravida, ac lacinia erat imperdiet. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus. Proin eget tortor risus. Proin eget tortor risus.",
        "title": "The Importance of Vestibulum",
        "category": "Health",
        "date": "2023-06-02",
        "image": "https://picsum.photos/200/300?random=2"
    },
    {
        "name": "Alice Johnson",
        "post": "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra, elit at aliquam fringilla, leo risus porta eros, at dapibus odio mi a ligula. Nullam vel augue. Praesent tincidunt, libero eget luctus tincidunt, felis mauris faucibus velit, nec commodo sem augue sit amet turpis. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi.",
        "title": "Exploring Fusce Vehicula",
        "category": "Travel",
        "date": "2023-06-03",
        "image": "https://picsum.photos/200/300?random=3"
    },
    {
        "name": "Bob Lee",
        "post": "Curabitur sollicitudin molestie mauris. Aenean egestas magna at porttitor vehicula nullam augue. Nullam volutpat, sapien nec fringilla vehicula, tellus augue ullamcorper nunc, in feugiat justo urna at justo. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Vivamus hendrerit arcu sed erat molestie vehicula. Proin eu tortor erat. Nulla convallis at erat a convallis. Sed vel nisl pretium, auctor purus vitae, egestas felis. Praesent tincidunt, libero eget luctus tincidunt, felis mauris faucibus velit, nec commodo sem augue sit amet turpis. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
        "title": "Curabitur Sollicitudin",
        "category": "Lifestyle",
        "date": "2023-06-04",
        "image": "https://picsum.photos/200/300?random=4"
    },
    {
        "name": "Carol King",
        "post": "Aenean ac tortor ante. Nullam scelerisque justo eu nibh porttitor, et vestibulum libero vehicula. Curabitur sollicitudin molestie mauris. Nulla at nulla justo, eget luctus tortor. Nullam volutpat, sapien nec fringilla vehicula, tellus augue ullamcorper nunc, in feugiat justo urna at justo. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
        "title": "Aenean Ac Tortor",
        "category": "Food",
        "date": "2023-06-05",
        "image": "https://picsum.photos/200/300?random=5"
    },
    {
        "name": "David Brown",
        "post": "Etiam ut dui nec nisi volutpat pulvinar. Aenean ac tortor ante. Nullam scelerisque justo eu nibh porttitor, et vestibulum libero vehicula. Curabitur sollicitudin molestie mauris. Nulla at nulla justo, eget luctus tortor. Nullam volutpat, sapien nec fringilla vehicula, tellus augue ullamcorper nunc, in feugiat justo urna at justo. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
        "title": "Understanding Etiam",
        "category": "Technology",
        "date": "2023-06-06",
        "image": "https://picsum.photos/200/300?random=6"
    },
    {
        "name": "Eve Green",
        "post": "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse scelerisque quam at pharetra imperdiet. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut est non lacus lacinia semper nec ligula. Vestibulum sit amet urna et justo facilisis fermentum. Etiam eget dapibus justo, nec suscipit purus.",
        "title": "Phasellus Eget Enim",
        "category": "Science",
        "date": "2023-06-07",
        "image": "https://picsum.photos/200/300?random=7"
    }
    ]

 function App() {

    const { setPosts, posts } = useContext(PostsContext)

     useEffect(() => {
         setPosts(postsData)
     }, [setPosts])

     useEffect(() => {
         console.log('Inside App: ', posts);
     }, [posts]);


     return (
    <Box>
        <PageNotFound/>
    </Box>
  )
}

export default App
