from app import create_app

app = create_app()
port = 5000

if __name__ == "__main__":
    app.run(port=port, debug=True)