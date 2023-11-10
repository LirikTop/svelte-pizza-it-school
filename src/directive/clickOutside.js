export function clickOutside(node){
    const handleClick = (event) => {
        if(node && !node.contains(event.target) && !event.defaultPrevented){
            node.dispatchEvent(
                new CustomEvent("click-outside", node)
            );
        }
    }

    document.addEventListener('click', handleClick);

    return{
        destroy(){
            document.removeEventListener('click',handleClick); 
        }
    }

}