import instaloader
from instaloader import Profile

# Improvements:
# allow user to analyze profile of other users, not just self
# new followings (people recently followed)
    # compare current followings to previous followings
username = input("Enter your Instagram username: ")

insta = instaloader.Instaloader()
insta.interactive_login(username) # ask for password on terminal

profile = Profile.from_username(insta.context, username)
followeesIterator = profile.get_followees()
followersIterator = profile.get_followers()

followeesList = list(followeesIterator)
followersList = list(followersIterator)

followeesNotFollowingBack = []
for followee in followeesList:
    if followee not in followersList:
        followeesNotFollowingBack.append(followee)
followersNotFollowedBack = []
for follower in followersList:
    if follower not in followeesList:
        followersNotFollowedBack.append(follower)

print("There are " + len(followeesNotFollowingBack) + " users you follow who are not following you back.")

showFolloweesNotFollowingBack = input("Enter 'y' to see a list of users you follow who do not follow you back. Press any other key to skip. ")

if showFolloweesNotFollowingBack == "y":
    for followee in followeesNotFollowingBack:
        print(followee)

print("There are " + len(followersNotFollowedBack) + " users you are not following back.")

showFollowersNotFollowedBack = input("Enter 'y' to see a list of your followers who you do not follow back. Press any other key to skip. ")

if showFollowersNotFollowedBack == "y":
    for follower in followersNotFollowedBack:
        print(follower.username)