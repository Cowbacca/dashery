# Windows Development

Download psycopg2 from http://www.lfd.uci.edu/~gohlke/pythonlibs/#psycopg and install with 
``` pip install [PSYCOPG2 WHL FILE HERE].```

Comment out the following from settings.py:
```python
# Parse database configuration from $DATABASE_URL
DATABASES['default'] = dj_database_url.config()

# Enable Connection Pooling (if desired)
DATABASES['default']['ENGINE'] = 'django_postgrespool'
```
