from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact


def home(request):
    return render(request, 'index.html')  # Render the home page template


def contact_submit(request):
    if request.method == 'POST':
        # Get form data
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # Validate form data (optional)
        if not name or not email or not message:
            messages.error(request, 'Please fill out all required fields.')
            return redirect('contact')  # Redirect back to the contact page

        # Save to database
        try:
            Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message
            )
            # Add a success message
            messages.success(request, 'Your message has been sent successfully!')
        except Exception as e:
            # Log the error (optional)
            print(f"Error saving contact form: {e}")
            messages.error(request, 'An error occurred while submitting your message. Please try again.')

        # Redirect to the home page
        return redirect('home')  # Redirect to the home page

    # If the request method is not POST, render the contact form page
    return render(request, 'index.html')
