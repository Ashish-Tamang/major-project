from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Temporary storage for reviews (later, we can use a database)
reviews = []

@app.route("/")
def home():
    return render_template("Review.html", reviews=reviews)

@app.route("/review", methods=["POST"])
def submit_review():
    name = request.form["name"]
    rating = request.form["rating"]
    comment = request.form["comment"]

    # Save the review in a list
    reviews.append({"name": name, "rating": rating, "comment": comment})

    return redirect("/")  # Redirect to the home page

if __name__ == "__main__":
    app.run(debug=True)
