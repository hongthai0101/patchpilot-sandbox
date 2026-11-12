import { Button } from '../../components/ui/Button';

// Sample data only: no real patients in this repo.
const SAMPLE = { name: 'Jane Sample', dob: '1990-01-01', clinic: 'Demo Clinic' };

export function ProfilePage() {
  return (
    <section style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 360 }}>
      <h1>Patient profile</h1>
      <label>
        Name <input defaultValue={SAMPLE.name} />
      </label>
      <label>
        Date of birth <input type="date" defaultValue={SAMPLE.dob} />
      </label>
      <label>
        Clinic <input defaultValue={SAMPLE.clinic} />
      </label>
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </div>
    </section>
  );
}
