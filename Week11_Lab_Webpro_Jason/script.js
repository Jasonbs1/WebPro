$(document).ready(function() {
    // Flag to prevent spamming of add/remove actions during animations
    let isAnimating = false;
    // Counter to keep track of the number of shapes added
    let shapeCount = 0;

    // Function to toggle the animation status
    function toggleAnimationStatus() {
        isAnimating = !isAnimating;
    }

    // Event handler for adding shapes
    $('#addShape').click(function() {
        if (isAnimating) return; // Prevent action if an animation is ongoing
        toggleAnimationStatus(); // Toggle the animation status to true

        // Get shape properties from user inputs
        const shapeType = $('#shapeType').val();
        const shapeColor = $('#shapeColor').val();
        let shapeSize = parseInt($('#shapeSize').val());

        // Enforce size limits
        shapeSize = Math.max(20, Math.min(400, shapeSize));

        // Create a new shape element with the specified properties
        const shape = $('<div></div>').addClass('shape').css({
            width: shapeSize + 'px',
            height: shapeSize + 'px',
            backgroundColor: shapeColor,
            left: -shapeSize - 10 // Start position off-screen to the left
        }).addClass(shapeType);

        // Calculate maximum number of shapes per row based on container width and shape size
        const containerWidth = $('#shapeContainer').width();
        const containerPadding = parseInt($('#shapeContainerWrapper').css('padding'));
        const maxPerRow = Math.floor((containerWidth - containerPadding * 2) / (shapeSize + 10));
        
        // Calculate the position of the new shape
        const row = Math.floor(shapeCount / maxPerRow);
        const col = shapeCount % maxPerRow;
        const leftPosition = col * (shapeSize + 10);
        const topPosition = row * (shapeSize + 10);

        // Append the new shape to the container and animate its entry
        $('#shapeContainer').append(shape);
        shape.css({
            top: topPosition + 'px',
            left: -shapeSize - 10 + 'px' // Initial position for slide-in animation
        }).show().animate({
            left: leftPosition + 'px' // Slide shape into position
        }, 'slow', toggleAnimationStatus); // Toggle animation status back to false

        shapeCount++; // Increment shape counter
    });

    // Event handler for removing the last shape
    $('#removeShape').click(function() {
        if (isAnimating) return; // Prevent action if an animation is ongoing
        toggleAnimationStatus(); // Toggle the animation status to true

        // Select the last shape added
        const lastShape = $('#shapeContainer .shape').last();
        // Animate the shape's removal with a fade-out effect
        lastShape.fadeOut('slow', function() {
            $(this).remove(); // Remove the shape from the DOM
            toggleAnimationStatus(); // Toggle animation status back to false
            shapeCount--; // Decrement shape counter
        });
    });
});
