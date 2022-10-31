
export const ScrollTo = (element: any) => {
    
    
        window.scrollTo(
            {
                top: element.current.offsetTop,
                behavior: "smooth"
            }
        )
    
}
