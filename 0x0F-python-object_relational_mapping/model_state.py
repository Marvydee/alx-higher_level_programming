#!/usr/bin/python3
# Defines a City model.
# Inherits from SQLAlchemy Base and links to the MySQL table cities.

from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class State(Base):
    """Class representing a state."""
    __tablename__ = 'states'
    
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    name = Column(String(128), nullable=False)
