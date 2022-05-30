import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'

const runCommand = async (cmd: string) => {
  return new Promise((resolve, reject) => {
		exec(cmd, (err, stdout, stderr) => {
			if (err) {
				resolve({
					error: true,
					message: err.message
				});
			} else {
				resolve({
					error: false,
					stderr: stderr,
					stdout: stdout
				});
			}
		})
	})
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.host) {
    const _res = await runCommand(`ping -c 1 ${req.body.host}`)
    return res.status(200).json(_res)
  }
  return res.status(200).json({ error: true, message: 'Invalid Host' })
}