
export default function Section({title, children, ...props}){
    return(
        <section {...props}>{/*The ...props is a spread operator, it will take all the props and spread them out onto applied element, components */}
            <h2>{title}</h2>
            {children}
        </section>
    )
}