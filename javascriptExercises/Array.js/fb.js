// Filter Active Users: Identify users who have posted at least once in the past week (based on timestamp).
// Extract Popular Posts: From the active users' posts, filter out those with less than 10 likes.
// Calculate Average Likes per User: Reduce the remaining popular posts to a single value representing the average number of likes per active user across all their popular posts.






const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
    }
  ];

const now = new Date();
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

console.log(oneWeekAgo)
// output:
// 2024-05-10T09:34:53.240Z

//Question 1  Filter Active Users:  


const activeUsers = users.filter(user =>
  user.posts.some(post => new Date(post.timestamp) > oneWeekAgo)
);

console.log(activeUsers);

//output:   
// [
//   {
//     id: 1,
//     name: 'John',
//     location: 'New York',
//     friends: [ 2, 3, 4 ],
//     posts: [ [Object], [Object], [Object] ]
//   },
//   {
//     id: 2,
//     name: 'Alice',
//     location: 'San Francisco',
//     friends: [ 1, 3 ],
//     posts: [ [Object], [Object] ]
//   },
//   {
//     id: 3,
//     name: 'Emily',
//     location: 'Los Angeles',
//     friends: [ 1, 2, 4 ],
//     posts: [ [Object], [Object] ]
//   },
//   {
//     id: 4,
//     name: 'David',
//     location: 'Chicago',
//     friends: [ 2 ],
//     posts: [ [Object], [Object] ]
//   },
//   {
//     id: 5,
//     name: 'Sarah',
//     location: 'Seattle',
//     friends: [ 3, 1 ],
//     posts: [ [Object], [Object] ]
//   }
// ]




   //quiz 2.filtering the popular posts of the active users.



const popularPosts = activeUsers.flatMap(user =>
  user.posts.filter(post => post.likes >= 10)
);

console.log(popularPosts);
//ouput: 
// [
//   {
//     content: 'Great day at Central Park!',
//     timestamp: '2024-05-10T12:00:00',
//     likes: 15
//   },
//   {
//     content: 'Visited the Statue of Liberty today!',
//     timestamp: '2024-05-05T17:45:00',
//     likes: 20
//   },
//   {
//     content: 'Hiking in the Bay Area!',
//     timestamp: '2024-05-12T14:20:00',
//     likes: 12
//   },
//   {
//     content: 'Beach day in LA!',
//     timestamp: '2024-05-08T09:45:00',
//     likes: 25
//   },
//   {
//     content: 'Deep dish pizza is the best!',
//     timestamp: '2024-05-11T10:30:00',
//     likes: 18
//   },
//   {
//     content: 'Exploring the Olympic National Park!',
//     timestamp: '2024-05-14T07:00:00',
//     likes: 11
//   }
// ]




//  Quiz 3.Avarage like per user




let popularlikes=[15,20,12,25,18,11];
let totalpopularlikes=popularlikes.reduce((sum,likes)=>sum+likes,0);
let Avaragelikes=totalpopularlikes/popularlikes.length;
console.log(Avaragelikes)


//output:
//16.833333333333332



