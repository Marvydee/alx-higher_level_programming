#!/usr/bin/python3

"""define a class Square"""

class Square:
    """private instance attribute"""
    def __init__(self, size=0):
        if type(size) is not int:
            raise TypeError("size must be an integer")
        else:
            if size < 0:
                raise ValueError("size must be >= 0")
            else:
                self.__size = size

