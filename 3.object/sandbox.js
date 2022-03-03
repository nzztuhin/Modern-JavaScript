//Object literals
// const blogs = [
//     {title: 'why work hard', likes:30 },
//     {title: 'why not sleep all day', likes:50 },
// ];

// console.log(blogs);

let user = {
    name:'Tuhin',
    age:'24',
    email:'tuhin@loops.co.bd',
    location: 'Bangladesh',
    blogs: [
        {title: 'why work hard', likes:30 },
        {title: 'why not sleep all day', likes:50 },
    ],
    login() {
        console.log('User logged in');
    },
    logout() {
        console.log('User logged out');
    },
    logBlogs() {
        console.log('this user has written this blog below:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

// console.log(user);
// console.log(user.name);
// console.log(user.age);

// user['name'] = 'Zaman';
// console.log(user['name']);
// console.log(typeof user);

// user.login();
// user.logout();

user.logBlogs();

