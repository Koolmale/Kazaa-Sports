from wikipediaapi import Wikipedia, ExtractFormat


wiki = Wikipedia('en', extract_format = ExtractFormat.HTML)

not_found = '<h1> Page not found </h1>'.encode('utf-8')


def search(term):

    page = wiki.page(term)

    if page.exists():
        summary = page.summary.encode('utf-8')
        if 'may refer to' in summary.decode('utf-8'):
            return not_found

        return summary

    else:
        return not_found
