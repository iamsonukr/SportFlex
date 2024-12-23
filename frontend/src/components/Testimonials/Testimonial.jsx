import React from 'react';
import './Testimonial.css'

const Testimonials = () => {
    // Testimonial data array
    const testimonialData = [
        {
            "id": 1,
            "comment": "The quality of the sportswear is incredible! The materials are so comfortable, and the fit is perfect. I’ve never felt more confident during my workouts!",
            "image": "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
            "name": "Sarah Miller",
            "role": "Fitness Enthusiast"
        },
        {
            "id": 2,
            "comment": "This is my go-to shop for sportswear. They have great options for my entire family—women, men, and even children. The durability and style are unmatched!",
            "image": "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            "name": "Asmath Hiraly",
            "role": "Happy Customer"
        },
        {
            "id": 3,
            "comment": "The range of products is amazing! Whether it's for myself, my kids, or my husband, we always find something we love. Plus, the designs are super trendy!",
            "image": "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
            "name": "Emma Thompson",
            "role": "Style-Conscious Shopper"
        }
    ];
    

    return (
        <div className="testimonial-main">
            <div className="container">
                <p>CUSTOMER REVIEWS</p>
                <h2>What our delighted buyers say about us</h2>
                <div className="testimonials">
                    {testimonialData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial">
                            <div className="star">★ ★ ★ ★ ★</div>
                            <p>{testimonial.comment}</p>
                            <img src={testimonial.image} alt={testimonial.name} />
                            <p className="name">{testimonial.name}</p>
                            <p className="role">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;