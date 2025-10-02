from legion_sdk import Legion
import os

base = os.getenv('LEGION_API_URL', 'http://localhost:3000')
key = os.getenv('LEGION_API_KEY', 'demo-key')

c = Legion(base, key)
print(c.health())
print(c.get_account('0x123'))
print(c.echo({'hello': 'world'}))
