from markdown2 import markdown
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader("./"))

template = env.get_template("template.html")

with open("article.md", "r") as markdown_file:
    article = markdown(markdown_file.read())

with open("index.html", "w") as output_file:
    content = template.render(article=article)
    output_file.write(content)
