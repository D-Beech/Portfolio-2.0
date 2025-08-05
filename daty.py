# science_club=("Alice","Bob","Carol")
# maths_club=("Bob","David","Eve")

# def find_does_both():
#     seen = set()
#     dupes = []
#     for s in (science_club + maths_club):
#         if s in seen:
#             dupes.append(s)
#         seen.add(s)
#     return dupes

# def find_exclusive():

#     sc = set(science_club)
#     mc = set(maths_club)

#     return sc.symmetric_difference(mc)

# print(find_does_both())
# print(find_exclusive())
    
student_info = {
    "name" : "Alice",
    "age" : 21,
    'courses' : ['Maths', 'Science']
}

print(student_info.get('grades', 'not available'))

student_info.update({'grade' : 'A'})
print(student_info)

student_info.update({'age' : 22})
print(student_info)

student_info.pop('courses')
print(student_info)

x = student_info.setdefault('email', student_info['name'] + '@example.com')
print(x)
print(student_info)