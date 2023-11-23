interface Post {
    id: number;
    created_at: Date;
    likes: number;
    content: string;
    image: string[];
    author: number; // Assuming author is represented by a user ID
}

export const postList: Post[] = [
    {
        id: 1,
        created_at: new Date('2023-11-20T12:00:00'),
        likes: 10,
        content: 'First post content',
        image: ['/exampleImage.svg', 'url1_2'],
        author: 101
    },
    {
        id: 2,
        created_at: new Date('2023-11-18T13:00:00'),
        likes: 20,
        content: 'Second post content',
        image: ['/exampleImage.svg', 'url2_2'],
        author: 101
    },
    {
        id: 3,
        created_at: new Date('2023-11-17T14:00:00'),
        likes: 30,
        content: 'Third post content',
        image: ['/exampleImage.svg', 'url3_2'],
        author: 103
    },
    {
        id: 4,
        created_at: new Date('2023-11-21T15:00:00'),
        likes: 40,
        content: 'Fourth post content',
        image: [ '/exampleImage.svg', 'url4_2'],
        author: 104
    },
    {
        id: 5,
        created_at: new Date('2023-11-20T16:00:00'),
        likes: 50,
        content: 'Fifth post content',
        image: ['/exampleImage.svg', 'url5_2'],
        author: 105
    }
];