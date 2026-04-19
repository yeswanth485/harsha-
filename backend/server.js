const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/happyteeth';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Models
const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  date: String,
  time: String,
  message: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});
const Appointment = mongoose.model('Appointment', AppointmentSchema);

const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now },
});
const Inquiry = mongoose.model('Inquiry', InquirySchema);

// Routes
app.post('/api/appointments', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    // In a real app, send email here
    res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (err) {
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: 'Inquiry sent successfully', inquiry });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send inquiry' });
  }
});

app.get('/api/admin/appointments', async (req, res) => {
  // Simple check for demo: ?secret=admin123
  if (req.query.secret !== 'admin123') return res.status(401).send('Unauthorized');
  const appointments = await Appointment.find().sort({ createdAt: -1 });
  res.json(appointments);
});

app.get('/api/admin/inquiries', async (req, res) => {
  if (req.query.secret !== 'admin123') return res.status(401).send('Unauthorized');
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  res.json(inquiries);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
