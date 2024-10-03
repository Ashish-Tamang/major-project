from flask import Flask, render_template, request

app = Flask(__name__)

# List to store reviews
reviews = []

@app.route('/')
def home():
    return render_template('review.html')

@app.route('/review', methods=['GET', 'POST'])
def review():
    if request.method == 'POST':
        name = request.form.get('name')
        rating = request.form.get('rating')
        comment = request.form.get('comment')
        reviews.append({'name': name, 'rating': rating, 'comment': comment})
    return render_template('review.html', reviews=reviews)

if __name__ == '__main__':
    app.run(debug=True)
