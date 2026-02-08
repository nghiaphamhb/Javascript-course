window.addEventListener("load", function(){
    const text = document.querySelector(".text");

    text.addEventListener("mouseenter", function(event){
        const showedText = event.target.dataset.tooltip;

        // create elements
        const tooltipDiv = document.createElement("div");
        document.body.appendChild(tooltipDiv);
        tooltipDiv.className = "tooltip";

        const tooltip = document.createElement("div");
        tooltipDiv.appendChild(tooltip);
        tooltip.classList = "tooltip-text";
        tooltip.textContent = showedText;
        
        // fix position
        const rect = event.target.getBoundingClientRect();
        const triangleHeight = 330;

        const tooltipW = tooltip.offsetWidth;
        const tooltipH = tooltip.offsetHeight;

        const x = rect.left + window.scrollX + rect.width / 2 - tooltipW / 2;
        const y = rect.top + window.scrollY - tooltipH - triangleHeight;

        tooltipDiv.style.left = `${x}px`;
        tooltipDiv.style.top = `${y}px`;
    });

    text.addEventListener("mouseleave", function(){
        const tooltip = document.querySelector(".tooltip-text");
        if(tooltip){
            tooltip.parentNode.removeChild(tooltip);
        }
    });
})