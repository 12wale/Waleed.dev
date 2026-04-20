'use client';

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ResetButton() {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleReset = async () => {
    if (!confirm('Are you sure you want to delete all visitor data? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);
    try {
      const res = await fetch('/api/admin/reset-visitors', {
        method: 'DELETE',
      });
      
      if (res.ok) {
        alert('Data reset successfully!');
        router.refresh();
      } else {
        alert('Failed to reset data.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while resetting data.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleReset}
      disabled={isDeleting}
      className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 px-4 py-2 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
    >
      {isDeleting ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
      )}
      <span>Reset All Data</span>
    </button>
  );
}
