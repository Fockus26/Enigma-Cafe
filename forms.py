from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DateField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email
from datetime import datetime

class ReservationForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()], render_kw={"placeholder": "Name"})
    seats = SelectField('Seats', choices=[
        ('1', '1 Person'),
        ('2', '2 People'),
        ('3', '3 People'),
        ('4', '4 People'),
        ('5', '5 People'),
        ('6', '6 People'),
        ('7', '7 People'),
        ('8', '8 People'),
        ('9', '9 People'),
        ('10', '10 People')
    ], render_kw={"placeholder": "Seats"})
    date = DateField("Date", validators=[DataRequired()], default=datetime.now(), id='datePicker')
    time = SelectField('Time', choices=[
        ('8:00am', '8:00 am'),
        ('8:30am', '8:30 am'),
        ('9:00am', '9:00 am'),
        ('9:30am', '9:30 am'),
        ('10:00am', '10:00 am'),
        ('10:30am', '10:30 am'),
        ('11:00am', '11:00 am'),
        ('11:30am', '11:30 am'),
        ('12:00pm', '12:00 pm'),
        ('12:30pm', '12:30 pm'),
        ('1:00pm', '1:00 pm'),
        ('1:30pm', '1:30 pm'),
        ('2:00pm', '2:00 pm'),
        ('2:30pm', '2:30 pm'),
        ('3:00pm', '3:00 pm'),
        ('3:30pm', '3:30 pm'),
        ('4:00pm', '4:00 pm'),
        ('4:30pm', '4:30 pm'),
        ('5:00pm', '5:00 pm'),
        ('5:30pm', '5:30 pm'),
        ('6:00pm', '6:00 pm'),
        ('6:30pm', '6:30 pm'),
        ('7:00pm', '7:00 pm'),
        ('7:30pm', '7:30 pm')
    ], render_kw={"placeholder": "Time"})
    email = StringField('Email', validators=[DataRequired(), Email()], render_kw={"placeholder": "Email"})
    message = TextAreaField('Message', render_kw={"placeholder": "Message"})
    submitContact = SubmitField('Submit')
    submitHome = SubmitField('Book on Page')
