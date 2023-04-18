import Card from './Card.js';


const posts = [
    {title: 'testing', content: 'Learn Testing'},
    {title: 'React', content: 'Learn React'}
]

function CardContainer (){
    return(
        <div>
            {posts.map((post) => ( <Card post={post} key={post.title}/>
                ))
            }
        </div>
    )
}

export default CardContainer;