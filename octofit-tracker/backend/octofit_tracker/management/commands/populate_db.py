from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='marvel')
        dc = Team.objects.create(name='dc')

        # Create users
        ironman = User.objects.create(email='ironman@marvel.com', name='Iron Man', team='marvel')
        captain = User.objects.create(email='captain@marvel.com', name='Captain America', team='marvel')
        batman = User.objects.create(email='batman@dc.com', name='Batman', team='dc')
        superman = User.objects.create(email='superman@dc.com', name='Superman', team='dc')

        # Create activities
        Activity.objects.create(user='Iron Man', type='run', duration=30, date='2026-02-06')
        Activity.objects.create(user='Captain America', type='cycle', duration=45, date='2026-02-06')
        Activity.objects.create(user='Batman', type='swim', duration=25, date='2026-02-06')
        Activity.objects.create(user='Superman', type='fly', duration=60, date='2026-02-06')

        # Create leaderboard
        Leaderboard.objects.create(team='marvel', points=75)
        Leaderboard.objects.create(team='dc', points=85)

        # Create workouts
        Workout.objects.create(name='Pushups', description='Do pushups', difficulty='easy')
        Workout.objects.create(name='Squats', description='Do squats', difficulty='medium')
        Workout.objects.create(name='Plank', description='Hold plank', difficulty='hard')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data'))
