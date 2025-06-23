import cron from "node-cron";
import { removeInactive } from '../../application/use-case/session/removeInactive';
/**
 * Schedules a daily task at 23:59 to remove inactive sessions.
 */
export const scheduleCleanup = () => {
  cron.schedule('59 23 * * * *', async () => {
    try {
      await removeInactive();
    } catch (error) {
      console.log(error);
    }
  })
}
