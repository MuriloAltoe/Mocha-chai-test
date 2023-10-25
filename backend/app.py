from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/item', methods=['GET'])
def get_item():
    response = {"resposta":"olá mundo"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)